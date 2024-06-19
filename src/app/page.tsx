import Pricing from '@/components/Pricing';
import getData from '@/utils/api';

export default async function Home() {
  const data = await getData();

  if (!data) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 xl:p-16 bg-[#05192d]">
      <Pricing data={data} />
    </main>
  );
}
