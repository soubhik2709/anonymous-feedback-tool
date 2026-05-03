import Button from "../../../components/ui/Button";
export const FormSettingCard = () => {
  return (
    <div className=" w-full  m-2 font-semibold">
        <h4 className="text-center">Form setting</h4>
        <section className="flex justify-between p-2 ">
          <p>close the form</p>
          <Button className="bg-slate-700  "> click</Button>
        </section>
        <section className="flex justify-between p-2 ">
          <p>Turn on mail Notifiaction</p>
          <Button className="bg-slate-700  "> click</Button>
        </section>
        <section className="flex justify-between p-2">
          <p>Delete This Form</p>
          <Button className="bg-slate-700  "> click</Button>
        </section>
    </div>
  );
};
