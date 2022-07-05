import { createClient } from "@supabase/supabase-js";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6YnlmaGdreWx4aGJ2ZXpkaG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwNTUzNTYsImV4cCI6MTk3MjYzMTM1Nn0.GpsEhLnqrKR9vZW7zg2iD5tqL3NKBrg-s-YZDeRz8JY";

const url = "https://qzbyfhgkylxhbvezdhny.supabase.co";

export const supabase = createClient(url, key);
