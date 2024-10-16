"use client"

import { atom } from 'recoil'

export const globaldate = atom({
    key: 'globaldate',
    default : new Date().toISOString().split('T')[0]
  });