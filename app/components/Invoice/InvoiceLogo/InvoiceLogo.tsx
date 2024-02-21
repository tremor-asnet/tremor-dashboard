const InvoiceLogo = ({
  additionalClasses = "",
  width = 16,
  height = 16,
}: {
  additionalClasses?: string;
  width?: number;
  height?: number;
}) => (
  <div
    className={`w-${width} h-${height} bg-contain bg-[url('/assets/images/logo/logo-td-dark.webp')] dark:bg-[url('/assets/images/logo/logo-td-light.webp')] ${additionalClasses}`}></div>
);

export default InvoiceLogo;
