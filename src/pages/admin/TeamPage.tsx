import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { TeamMember } from '../../types/database';

const DEPARTMENTS = ['Leadership Team', 'Academic Team', 'Operations Team', 'Media Team', 'Volunteer Team'];

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', position: '', department: 'Leadership Team', photo_url: '' });

  useEffect(() => { load(); }, []);

  const load = async () => {
    const { data } = await supabase.from('team_members').select('*').order('department');
    if (data) setMembers(data as TeamMember[]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      await supabase.from('team_members').update(form).eq('id', editing);
    } else {
      await supabase.from('team_members').insert(form);
    }
    setForm({ name: '', position: '', department: 'Leadership Team', photo_url: '' });
    setEditing(null);
    setShowForm(false);
    load();
  };

  const handleEdit = (m: TeamMember) => {
    setForm({ name: m.name, position: m.position, department: m.department, photo_url: m.photo_url });
    setEditing(m.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Remove this team member?')) {
      await supabase.from('team_members').delete().eq('id', id);
      load();
    }
  };

  const inputCls = 'w-full border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[0.85rem] focus:outline-none focus:border-[var(--ink)]';
  const labelCls = "block mb-1.5 font-mono-custom text-[0.52rem] tracking-[0.14em] uppercase text-[var(--muted)]";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.04em', color: 'var(--ink)' }}>
          Team Management
        </h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditing(null); setForm({ name: '', position: '', department: 'Leadership Team', photo_url: '' }); }}
          className="px-4 py-2 border-2 border-[var(--red)] text-[var(--red)] hover:bg-[var(--red)] hover:text-white transition-all duration-200 cursor-pointer"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          {showForm ? 'Cancel' : 'Add Member'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="border border-[var(--line)] p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <div>
              <label className={labelCls}>Name</label>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputCls} required />
            </div>
            <div>
              <label className={labelCls}>Position</label>
              <input value={form.position} onChange={e => setForm(f => ({ ...f, position: e.target.value }))} className={inputCls} required />
            </div>
            <div>
              <label className={labelCls}>Department</label>
              <select value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} className={inputCls}>
                {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Photo URL</label>
              <input value={form.photo_url} onChange={e => setForm(f => ({ ...f, photo_url: e.target.value }))} className={inputCls} placeholder="Optional" />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--red)] transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            {editing ? 'Update Member' : 'Add Member'}
          </button>
        </form>
      )}

      {DEPARTMENTS.map(dept => {
        const deptMembers = members.filter(m => m.department === dept);
        if (deptMembers.length === 0) return null;
        return (
          <div key={dept} className="mb-8">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.04em', color: 'var(--ink)', marginBottom: '1rem' }}>
              {dept}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deptMembers.map(m => (
                <div key={m.id} className="border border-[var(--line)] p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)', border: '1px solid var(--line)' }}>
                    {m.photo_url ? (
                      <img src={m.photo_url} alt={m.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.9rem', color: 'var(--muted)' }}>
                        {m.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block truncate" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>
                      {m.name}
                    </span>
                    <span className="block truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.48rem', letterSpacing: '0.08em', color: 'var(--red)', textTransform: 'uppercase' }}>
                      {m.position}
                    </span>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={() => handleEdit(m)} className="text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer bg-transparent border-none text-xs">Edit</button>
                    <button onClick={() => handleDelete(m.id)} className="text-[var(--muted)] hover:text-[var(--red)] cursor-pointer bg-transparent border-none text-xs">Del</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
