import Layout from "../layout/layout";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function AirView() {
  return (
    <Layout className="border-none">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Layout>
  );
}
