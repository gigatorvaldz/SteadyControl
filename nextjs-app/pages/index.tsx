import Head from "next/head";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import CitizensService from "@/services/CitizensService";
import { Resident } from "@/interfaces/hierarchy";
import CitizenList from "@/components/CitizensList";
import buildHierarchy from "@/utils/buildHierarchy";
import { citizensExtended, citizensReduced } from "@/data/citizens-extended";
import CitiesService from "@/services/CitiesService";
import { City } from "@/interfaces/city";

const inter = Inter({ subsets: ["latin"] });

export interface HomePageProps {
  residents: Resident[],
  cities: City[]
}

export default function Home({ residents, cities }: HomePageProps) {
  const hierarchy = buildHierarchy(residents);

  const extendedHierarchy = buildHierarchy(citizensExtended);
  const reducedHierarchy = buildHierarchy(citizensReduced);

  return (
    <>
      <Head>
        <title>SteadyControl</title>
        <meta name="description" content="Test APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <CitizenList cities={cities} hierarchy={hierarchy} />

        <h2>Расширенная иерархия: </h2>
        <CitizenList cities={cities} hierarchy={extendedHierarchy} />

        <h2>Укороченная иерархия: </h2>
        <CitizenList cities={cities} hierarchy={reducedHierarchy} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  residents: any;
}> = async () => {
  const response = await CitizensService.getCitizens();
  const citizens = await response.data;

  const citiesReponse = await CitiesService.getCities();
  console.log(citiesReponse);
  
  const cities = await citiesReponse.data;
  console.log(cities);


  return {
    props: {
      residents: citizens,
      cities
    },
  };
};
