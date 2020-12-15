import { GetServerSideProps } from 'next';
import { Title } from '@/styles/pages/Home';
import SEO from '@/components/SEO';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: IHomeProps) {
  return (
    <div>
      <SEO
        title="DevCommerce, development products for developers"
        shouldExcludeTitleSuffix
      />

      <section>
        <Title>Products</Title>
      </section>

      <ul>
        {recommendedProducts.map((recommendedProduct) => {
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

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
