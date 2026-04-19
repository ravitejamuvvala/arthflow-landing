import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Use service role key here (server-side only — never expose to client)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email: email.toLowerCase().trim() }])

    // Handle duplicate email gracefully
    if (error) {
      if (error.code === '23505') {
        // Unique constraint — email already exists
        return NextResponse.json(
          { message: 'already_registered' },
          { status: 200 }
        )
      }
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'success' },
      { status: 200 }
    )

  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}