const InvoiceLogo = ({ width, height }: { width: number; height: number }) => (
  <div
    className={`w-${width} h-${height} bg-contain bg-[url('/assets/images/logo/logo-td-dark.webp')] dark:bg-[url('/assets/images/logo/logo-td-light.webp')]`}></div>
);

export default InvoiceLogo;
