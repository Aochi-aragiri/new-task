import Layout from "../layout/layout";
import { Field } from "../ui/field";
import { Progress } from "../ui/progress";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function AirView() {
  return (
    <Layout className="border-none">
      <Tabs className="border-b p-4 flex justify-center" defaultValue="가는 길">
        <TabsList className="w-full rounded-3xl p-5 pl-0 bg-white border">
          <TabsTrigger
            value="가는 길"
            className="rounded-3xl p-5 pl-8 pr-8 data-[state=active]:bg-linear-to-b
data-[state=active]:from-neutral-700
data-[state=active]:to-black data-[state=active]:text-white"
          >
            가는 길
          </TabsTrigger>

          <TabsTrigger value="오는 길" disabled className="rounded-2xl p-5">
            오는 길
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex justify-between items-center pl-8 pr-8 pt-4 text-xs font-medium text-neutral-500">
        <p>Incheon</p>
        <div className="flex text-[11px] p-1 pl-2 pr-2 font-semibold  text-[rgb(131,201,73)] rounded-2xl bg-[rgb(229,245,216)]">
          52분 소요됨
        </div>
        <p>Jeju</p>
      </div>

      <div className="flex justify-between items-center gap-8 pl-8 pr-8 pt-2 font-bold text-xl">
        <p>ICH</p>
        <Field className="w-full max-w-sm">
          <Progress
            className="bg-neutral-200 [&>div]:bg-linear-to-r [&>div]:from-white [&>div]:to-neutral-800"
            value={40}
            id="progress-upload"
          />
        </Field>
        <p>CJU</p>
      </div>

      <div className="grid grid-cols-3 divide-neutral-200 p-1 pt-3 bg-neutral-100 pb-3 border rounded-2xl m-4 text-xs">
        <div className="flex flex-col gap-1 items-center border-r">
          <span className="text-neutral-400">Airline</span>
          <span className="font-medium">Korean Air</span>
        </div>

        <div className="flex flex-col gap-1 items-center border-r">
          <span className="text-neutral-400">Flight Code</span>
          <span className="font-medium">JU 220</span>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <span className="text-neutral-400">Class</span>
          <span className="font-medium">Economy</span>
        </div>
      </div>
    </Layout>
  );
}
