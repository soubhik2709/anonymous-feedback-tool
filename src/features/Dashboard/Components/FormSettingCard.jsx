export const FormSettingCard = () => {
  return (
    <div className=" w-full  m-2">
        <h4 className="text-center">Form setting</h4>
        <section className="flex justify-between p-2">
          <p>close the form</p>
          <button className="bg-slate-700  "> click</button>
        </section>
        <section className="flex justify-between p-2">
          <p>Trun on email Notifiaction</p>
          <button className="bg-slate-700  "> click</button>
        </section>
        <section className="flex justify-between p-2">
          <p>Delte This Form</p>
          <button className="bg-slate-700  "> click</button>
        </section>
    </div>
  );
};
