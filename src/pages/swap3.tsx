import Trade from '@/components/ui/trade';
import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import DashboardLayout from '@/layouts/_dashboard';
import Button from '@/components/ui/button';
import Input from '@/components/ui/forms/input';
import InputLabel from '@/components/ui/input-label';
import routes from '@/config/routes';
import { useRouter } from 'next/router';

const SwapPage3: NextPageWithLayout = () => {
  const router = useRouter();

  function AddAmount() {
    return (
      <div className="mx-auto w-full px-4 pt-8 pb-14 sm:px-3 sm:pb-5 sm:pt-6 lg:px-4 xl:px-2 2xl:px-0">
        <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <InputLabel title="Amount" important />
              <Input type="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <NextSeo title="Vesting" />
      <Trade>
        <div className="mx-auto w-full px-4 pt-8 pb-14 sm:px-3 sm:pb-5 sm:pt-6 lg:px-4 xl:px-2 2xl:px-0">
          <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* NFT preview */}
              <InputLabel title="Step 3" />
              <div className="relative flex flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark"></div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <InputLabel title="Address" important />
            <Input type="text" />
          </div>

          {/* Token Address */}
          <div className="mb-4">
            <InputLabel title="Amount" important />
            <Input type="text" />
          </div>

          <Button
            shape="rounded"
            fullWidth={false}
            className="uppercase"
            onClick={() => AddAmount()}
          >
            Add
          </Button>
          <br />
          <br />
          <Button shape="rounded" fullWidth={true} className="uppercase">
            Submit
          </Button>
        </div>
      </Trade>
    </>
  );
};

SwapPage3.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default SwapPage3;
