import { Children, cloneElement } from "react";

export const ResponsiveContainer = props => {
  return (
    <div>
      {Children.map(props.children, child =>
        cloneElement(child, { width: 100, height: 100 }),
      )}
    </div>
  );
};

export * from "recharts";
