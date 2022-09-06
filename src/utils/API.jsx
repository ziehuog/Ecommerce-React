import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// export const dataContext = useContext()
export function DATA() {
  const [DATA, setDATA] = useState();
  useEffect(() => {
    fetch(`https://course-api.com/react-store-products`)
      .then((res) => res.json())
      .then((users) => setDATA(users));
  }, []);
  console.log(DATA);

  return <div>API</div>;
}

// export default API
