function StatCard({ title, value, description, icon, iconBg }) {
  return (
    <div className="bg-white rounded-xl p-4 min-h-[108px] flex items-start gap-4">
      
      <div
  className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}
>
  <img
    src={icon}
    alt=""
    className="w-6 h-6 object-contain"
  />
</div>

      <div>
        <p className="text-[13px] text-[#222]">
          {title}
        </p>

        <h3 className="text-[29px] leading-none mt-2 text-[#222] font-medium">
          {value}
        </h3>

        <p className="text-[11px] text-gray-400 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default StatCard;