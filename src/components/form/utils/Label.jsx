export default function Label({ text, name, type, data, onChange }) {
  return (
    <>
      <label>
        {text}
        <input
          autoComplete="on"
          name={name}
          type={type}
          value={data[name]}
          onChange={onChange}
        />
      </label>
    </>
  );
}
