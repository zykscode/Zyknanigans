import Header from '@/components/header';
import DropdownMenu from '@/components/dropdown';
import { Footer } from '@/components/footer';
import Main from '@/components/main';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <section className="flex px-4 min-h-screen flex-col">
      <Header />
      <div className="overflow-hidden  flex-col flex rounded-xl">
        <DropdownMenu />
        <Main>{children}</Main>
      </div>
      <Footer />
    </section>
  );
};

export default Wrapper;
