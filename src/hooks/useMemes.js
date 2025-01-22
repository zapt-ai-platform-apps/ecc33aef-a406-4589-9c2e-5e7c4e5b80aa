import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import * as Sentry from '@sentry/browser';

const useMemes = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const { data, error } = await supabase
          .from('memes')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setMemes(data);
      } catch (error) {
        Sentry.captureException(error);
        console.error('Error fetching memes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  const handleVote = async (id, increment = true) => {
    try {
      const { data, error } = await supabase.rpc(increment ? 'increment_votes' : 'decrement_votes', {
        meme_id: id
      });

      if (error) throw error;
      setMemes(memes.map(m => m.id === id ? { ...m, votes: data } : m));
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error voting:', error);
    }
  };

  return { memes, loading, handleVote };
};

export default useMemes;