/**
 * - original component should be replaceable with derived component,
 *      without breaking the application.
 */

type UserBadgeProps = {
  name: string;
  role: string;
  style?: React.CSSProperties;
};

const UserBadge = ({ name, role, style }: UserBadgeProps) => (
  <div style={style} className="">
    <span>User: {name}</span> <span>Role: {role}</span>
  </div>
);

/**
 * - a derived component here can replace the original
 *      without breaking the application
 */

const AdminBadge = ({ name, role }: UserBadgeProps) => (
  <UserBadge name={name} role={role} style={{ color: "red" }} />
);
