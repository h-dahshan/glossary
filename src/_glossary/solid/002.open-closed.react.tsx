/**
 * - a component should be open for extension but closed for modification.
 */

type CardProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};
/**
 * - here you can use the Card for any shape
 * - any changes will not affect the Card itself
 */
const Card = ({ header, footer, children }: CardProps) => (
  <div className="...">
    {header && <div className="...">{header}</div>}

    <div>{children}</div>

    {footer && <div className="...">{footer}</div>}
  </div>
);
