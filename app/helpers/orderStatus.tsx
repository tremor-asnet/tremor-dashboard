export const orderStatus = (status: number) => {
  switch (status) {
    // When data response status === 0, the order status is delivered
    case 0:
      return (
        <>
          <p className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            Order was delivered 2 days ago.
          </p>
          <p className="p-2 mt-4 font-bold text-white dark:text-white bg-green-500 text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            delivered
          </p>
        </>
      );
    // When data response status === 1, the order status is canceled
    case 1:
      return (
        <>
          <p className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            Order was canceled 2 days ago.
          </p>
          <p className="p-2 mt-4 font-bold text-white dark:text-white bg-red-500 text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            canceled
          </p>
        </>
      );
    // When data response status === 2, the order status is refunded
    case 2:
      return (
        <>
          <p className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            Order was refunded 2 days ago.
          </p>
          <p className="p-2 mt-4 font-bold text-white dark:text-white bg-primary text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            refunded
          </p>
        </>
      );
    // When data response status === !0 | !1 | !2, the order status is pending
    default:
      return (
        <>
          <p className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            Order was pending 2 days ago.
          </p>
          <p className="p-2 mt-4 font-bold text-white dark:text-white bg-seldom text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            pending
          </p>
        </>
      );
  }
};