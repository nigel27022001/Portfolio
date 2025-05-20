import { ReactNode } from "react";

type SectionProps = {
  id: string;
  additionalCustomBackdrop?: string;
  children?: ReactNode;
};

export default function Section({ id, children, additionalCustomBackdrop}: SectionProps) {
  if (additionalCustomBackdrop) {
    return (
    <section
      id={id}
      className="w-screen min-h-screen flex flex-col gap-4 items-center justify-center bg-quaternary pt-10 dark:bg-dark-quinary section-bg-md"
    >
      {children}
    </section>
    )
  } else {
    return (
      <section
        id={id}
        className="w-screen min-h-screen flex flex-col gap-4 items-center justify-center bg-quaternary pt-10 dark:bg-dark-quinary"
      >
        {children}
      </section>
    );
  }
}