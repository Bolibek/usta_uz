import { useAddWorkerPostMutation } from "../../services/invoiceApi"
export default function WorkerPostForm() {
    const [addWorkerPost] = useAddWorkerPostMutation()
   const handle = async e => {
    e.preventDefault()
    try {
      // if (kindModal === 'editLight') {
      //   const newData = {
      //     ...data,
      //     status,
      //     senderAddress: {
      //       street: e.target[0].value,
      //       city: e.target[1].value,
      //       postCode: e.target[2].value,
      //       country: e.target[3].value,
      //     },
      //     employerName: e.target[4].value,
      //     employerEmail: e.target[5].value,
      //     employerAddress: {
      //       street: e.target[6].value,
      //       city: e.target[7].value,
      //       postCode: e.target[8].value,
      //       country: e.target[9].value,
      //     },
      //     paymentDue: formatDate(e.target[10].value),
      //     paymentTerms: e.target[11].value,
      //     description: e.target[12].value,
      //     items: itemsRow,
      //   }
      //   updateInvoice({_id, ...newData}).unwrap()
      //   navigate(`/invoice/${invoiceId}`)
      //   window.location.reload(false)
      // } else {
        await addWorkerPost({
          // id: newInvoiceId,
          // status: defaultStatus,
          senderAddress: {
            street: e.target[0].value,
            city: e.target[1].value,
            postCode: e.target[2].value,
            country: e.target[3].value,
          },
          jobName: e.target[4].value,
          employerEmail: e.target[5].value,
          employerAddress: {
            street: e.target[6].value,
            city: e.target[7].value,
            postCode: e.target[8].value,
            country: e.target[9].value,
          },
          // paymentDue: formatDate(e.target[10].value),
          // createdAt: formatDate(new Date()),
          paymentTerms: e.target[11].value,
          description: e.target[12].value,
          // items: itemsRow,
        }).unwrap()
        // setDefaultStatus('pending')
        // setDraft('Mark as draft')
      // }
    } catch (err) {
      // setError(err)
    }
    // setOpenWindow(false)
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Ishchi e&lsquo;lonini to&lsquo;ldirish</h1>
      <div className="mt-5 p-5 border-[0.1rem] border-green-600 rounded-md">
        <div>
          <div className="flex flex-col">
            <label htmlFor="">Mutaxassislik nomi</label>
            <input
              className="border-green-600 border-[0.1rem] rounded-sm outline-none "
              type="text"
            />
          </div>
          <div className=" flex flex-col">
            <div className=" flex flex-row  justify-between">
              <div className=" flex flex-col w-[48%]">
                <label htmlFor="">Bo&lsquo;lim</label>
                <select
                  name=""
                  id=""
                  className="border-green-600 border-[0.1rem] rounded-sm outline-none "
                >
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                  <option value="">Qurilish</option>
                </select>
              </div>
              <div className=" flex flex-col w-[48%]">
                <label htmlFor="">Kategoriya</label>
                <select
                  name=""
                  id=""
                  className="border-green-600 border-[0.1rem] rounded-sm outline-none "
                >
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                  <option value="">Suvoq</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-row justify-between ">
              <div className=" flex flex-col w-[48%]">
                <label htmlFor="">Kategoriya turi</label>
                <select
                  name=""
                  id=""
                  className="border-green-600 border-[0.1rem] rounded-sm outline-none "
                >
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                  <option value="">Qum suvoq</option>
                </select>
              </div>
              <div className=" flex flex-col w-[48%]">
                <label htmlFor="">Material turi (ixtiyoriy)</label>
                <select
                  name=""
                  id=""
                  className="border-green-600 border-[0.1rem] rounded-sm outline-none "
                >
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                  <option value="">Kliniz</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className=" flex flex-col">
              <label htmlFor="">Qilingan ish rasmi (ixtiyoriy)</label>
              <input
                type="file"
                className="border-green-600 border-[0.1rem] rounded-sm outline-none w-[91.5%] "
                placeholder="Rasm yuklang"
              />
            </div>
            <div className=" flex flex-col w-[52%]">
              <label htmlFor="">Qo&lsquo;shimcha ma&lsquo;lumot (ixtiyoriy)</label>
              <textarea
                type="text"
                className=" border-green-600 border-[0.1rem] rounded-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <h1>Ishni qachon boshlash kerak?</h1>
          <div className=" flex flex-row">
            <input type="radio" name="qachon" value="" checked />
            <label htmlFor="" className="mr-5 ml-1">
              Bugun
            </label>
            <input type="radio" name="qachon" value="" />
            <label htmlFor="" className="mr-5 ml-1">
              Ertaga
            </label>
            <input type="radio" name="qachon" value="" />
            <label htmlFor="" className="mr-5 ml-1">
              Ish egasining vaqtiga qarab
            </label>
            <input type="radio" name="qachon" value="" />
            <label htmlFor="" className="mr-5 ml-1">
              Hafta ichida
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Qaysi vaqtda aloqaga chiqqan ma&lsquo;qul?</label>
            <select
              name=""
              id=""
              className=" w-[45%] border-green-600 border-[0.1rem] rounded-sm outline-none"
            >
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
              <option value="">9:00 dan 10:00 gacha</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Xizmat uchun minimal to&lsquo;lov</label>
            <input
              type="number"
              className="w-[45%] border-green-600 border-[0.1rem] rounded-sm outline-none "
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="">Manzil</label>
            <input
              type="text"
              className="border-green-600 border-[0.1rem] rounded-sm outline-none "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Mo&lsquo;ljal (ixtiyoriy)</label>
            <input
              type="text"
              className="border-green-600 border-[0.1rem] rounded-sm outline-none "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Telefon raqam</label>
            <input
              type="text"
              className=" w-[45%] border-green-600 border-[0.1rem] rounded-sm outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Qo&lsquo;shimcha talablar (ixtiyoriy)</label>
            <textarea
              className="border-green-600 border-[0.1rem] rounded-sm outline-none "
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
