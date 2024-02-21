const InvoiceLogo = ({
  className = "",
  width = 16,
  height = 16,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <div
    className={`w-${width} h-${height} bg-contain bg-[url('/assets/images/logo/logo-td-dark.webp')] dark:bg-[url('/assets/images/logo/logo-td-light.webp')] ${className}`}></div>
);

export default InvoiceLogo;
