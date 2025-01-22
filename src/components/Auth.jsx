import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../supabaseClient';
import * as Sentry from '@sentry/browser';

const AuthComponent = ({ session }) => {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'discord']}
          socialLayout="horizontal"
          localization={{
            variables: {
              sign_in: {
                email_label: 'Correo Electrónico',
                password_label: 'Contraseña',
                button_label: 'Iniciar Sesión',
              },
            },
          }}
        />
      ) : (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500/50 hover:bg-red-500/70 text-white rounded-lg transition-colors"
        >
          Cerrar Sesión
        </button>
      )}
    </div>
  );
};

export default AuthComponent;