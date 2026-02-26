export default function Message({ sender, text }) {
  return (
    <div className={`mb-2 ${sender === "user" ? "text-right" : ""}`}>
      <span
        className={`inline-block px-4 py-2 rounded-xl shadow-md ${
          sender === "user"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {text}
      </span>
    </div>
  );
}