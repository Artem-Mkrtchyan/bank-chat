import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';



export const UserProfile: React.FC = () => {
  const token = useAppSelector(state => state.auth.data.jwtToken)
  const id = useAppSelector(state => state.auth.data.userId)

  return (
    <div>
      Progile user
    </div>
  )
}
