-- Run this in Supabase SQL Editor (https://supabase.com/dashboard/project/ykhxaecbbxaaqlujuzde/sql)

-- Create feedback table
create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  project text not null default 'vibecodingevents',
  url text not null,
  path text,
  element_selector text,
  element_text text,
  x_percent float,
  y_percent float,
  viewport_width int,
  viewport_height int,
  comment text not null,
  screenshot_url text,
  user_agent text,
  created_at timestamptz default now(),
  resolved boolean default false,
  resolved_at timestamptz,
  notes text
);

-- Create storage bucket for screenshots
insert into storage.buckets (id, name, public)
values ('feedback-screenshots', 'feedback-screenshots', true)
on conflict (id) do nothing;

-- RLS policies - allow anonymous inserts (for the widget)
alter table public.feedback enable row level security;

create policy "Allow anonymous inserts" on public.feedback
  for insert with check (true);

create policy "Allow authenticated reads" on public.feedback
  for select using (true);

create policy "Allow authenticated updates" on public.feedback
  for update using (true);

-- Storage policies - allow anonymous uploads
create policy "Allow anonymous uploads" on storage.objects
  for insert with check (bucket_id = 'feedback-screenshots');

create policy "Allow public reads" on storage.objects
  for select using (bucket_id = 'feedback-screenshots');

-- Index for querying by project
create index if not exists idx_feedback_project on public.feedback(project, resolved, created_at desc);
