import { useEffect, useState } from 'react';

interface Entry {
  id: number;
  response: string;
}

interface Data {
  future: Entry[];
  past: Entry[];
}

interface DisplayProps {
  id: number; // ID of the entry to fetch
  type: 'future' | 'past'; // Type of the entry
}

const Display = ({ id, type }: DisplayProps) => {
  const [story, setStory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/Response.json');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Data = await res.json();

        const entry = data[type].find(entry => entry.id === id);
        if (entry) {
          setStory(entry.response);
        } else {
          setStory('');
        }
      } catch (error) {
        setStory('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, type]); // Dependency array includes id and type to refetch when they change

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>{story}</p>
    </div>
  );
};

export default Display;
