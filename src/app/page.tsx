import Pricing from '@/components/Pricing';
import getData from '@/utils/api';

export default async function Home() {
  const data = await getData();

  console.log({ data });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-[#05192d]">
      <Pricing />
    </main>
  );
}
