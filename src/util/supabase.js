import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://jyoafbgyoyqkcaotgdoh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5b2FmYmd5b3lxa2Nhb3RnZG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NTk4ODksImV4cCI6MjAxMjIzNTg4OX0.w4cJpnV74yrIf277tuABHI8op1LVoQrdA7pEj7Wvzrg")

export default supabase;