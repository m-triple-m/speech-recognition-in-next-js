'use client';
import { VoiceProvider } from '@/context/VoiceContext';
import React from 'react';

const Template = ({ children }) => {
    return (
        <VoiceProvider>
            {children}
        </VoiceProvider>
    )
}

export default Template