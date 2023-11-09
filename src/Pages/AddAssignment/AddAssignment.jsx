import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const AddAssignment = () => {
  const {user} = useAuth()
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmet = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const cetagory = form.cetagory.value;
    const marks = form.marks.value;
    const dueDate = startDate;

    const infos = { title, description, thumbnail, cetagory, dueDate,marks, email:user.email};
    console.log(infos);

    fetch('https://assignment-server-11-two.vercel.app/api/v1/addassignments',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(infos)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        toast.success('Your assignment successfuly added')
      }
    })

  };
  // style={{ height: 'calc(100vh - 68px)' }}
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 lg:h-screen  bg-[#F8E5F8]" >
      <form
        onSubmit={handleSubmet}
        className="container flex flex-col mx-auto space-y-6 "
      ><div className="text-center space-y-3 ">
        <h3 className="text-3xl font-bold ">Add Your Assignment</h3>
        <p>Add Assignment website is a user-friendly platform designed to simplify the process of creating and managing assignments.</p>
      </div>
        <fieldset className="grid grid-cols-3  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 ">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Assignment Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-3 py-1 outline-none duration-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Thumbnail</label>
              <input
                type="url"
                name="thumbnail"
                placeholder="Photo URL"
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-3 py-1 outline-none duration-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm" >Assignment Marks (0-50)</label>

              <input
                type="number"
                name="marks"
                placeholder="Out of 50"
                min="0"
                max="50"
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-3 py-1 outline-none duration-700"
              />
            </div>
            <div className="col-span-full sm:col-span-1">
              <label className="text-sm lg:ml-12"> Due date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='dd-MM-yyyy'
                minDate={new Date()}
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-3 py-1 outline-none duration-700 lg:ml-12"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm lg:ml-20">Assignment Type</label>
              <select
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-3 py-1 outline-none duration-700 lg:ml-20"
                name="cetagory"
              >
                <option value="Hard">Hard</option>
                <option value="Medium">Medium</option>
                <option value="Easy">Easy</option>
              </select>
            </div>
            <div className="col-span-full">
              <label className="text-sm">Description</label>
              <textarea
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-3 py-1 outline-none duration-700"
                name="description"
                cols="1"
                rows="3"
                placeholder="Description"
              ></textarea>
              <button
          className="btn bg-slate-800 hover:bg-slate-950 duration-700 text-white font-medium w-full mt-8 "
          type="submit"
        >
          Submit
        </button>
            </div>
            
          </div>
        </fieldset> 
      </form>
    </section>
  );
};

export default AddAssignment;
