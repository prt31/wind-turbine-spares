export default function Quote() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Request a Quote</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Your Request" className="border p-2 rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
