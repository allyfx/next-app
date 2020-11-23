import { useEffect, useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const [recommended, setRecommended] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommended(data);
      });
    });
  }, []);

  return (
    <div>
      <section>
        <Title>Products</Title>
      </section>

      <ul>
        {recommended.map((recommendedProduct) => {
          return (
            <li key={recommendedProduct.id}>
              {recommendedProduct.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
