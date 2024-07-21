'use client'
import { functions } from '@/features/firebase/client'
import { Auth } from '@/types/auth'
import { httpsCallable } from 'firebase/functions'
import { useEffect, useState } from 'react'

const AuthCheck = () => {
  const [serverAuth, setServerAuth] = useState<Auth | null>(null)
  useEffect(() => {
    const func = async () => {
      setServerAuth(
        (await httpsCallable<void, Auth | null>(functions, 'auth-get')()).data
      )
    }
    func()
  }, [])
  return (
    <div className="text-center">
      <p>
        {serverAuth
          ? `Auth ID: ${serverAuth.name}`
          : 'Can not get any user data.'}
      </p>
    </div>
  )
}

export default AuthCheck
