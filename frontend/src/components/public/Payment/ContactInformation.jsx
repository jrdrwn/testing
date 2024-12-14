
const ContactInformation = ({ email, setEmail, phone, setPhone, countries, selectedCountry, setSelectedCountry }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Contact Information</label>
      <input
        type="email"
        className="w-full border border-gray-300 p-2 rounded mb-2 bg-gray-200 text-gray-500 cursor-not-allowed"
        placeholder="pintura@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        readOnly
        required
      />
      <div className="flex mb-2">
      <select
        className="border border-gray-300 p-2 rounded mr-2"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        >
        {countries.map((country) => (
            <option key={country.code} value={country.code}>
            {country.name} ({country.code})
            </option>
        ))}
        </select>
        <input
          type="tel"
          className="flex-1 border border-gray-300 p-2 rounded"
          placeholder="812345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={(e) => {
            if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
              e.preventDefault();
            }
          }}
          pattern="^\d{9,13}$"
          required
        />
      </div>
    </div>
  );
};

export default ContactInformation;