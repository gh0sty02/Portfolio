'use client';

import { Divider } from '@/components/ui/divider';
import { useTheme } from '@/hooks/use-theme';
import { Skill } from 'data/Skills';

const SkillList = ({
  title,
  columns,
}: {
  title: string;
  columns: Skill[][];
}) => {
  const { theme } = useTheme();
  const emphasisColor = theme === 'light' ? 'text-teal-500' : 'text-cyan-200';
  const [colOne, colTwo = []] = columns;

  return (
    <>
      <div className="text-sm pb-1 font-bold">
        {title}
      </div>
      <Divider className="mb-4" />
      <div className="grid grid-cols-2 gap-4 pb-6 font-poppins">
        <ul className="space-y-3">
          {colOne.map((item) => {
            const IconComponent = item.icon;
            return (
              <li
                key={item.name}
                className="text-sm flex items-center"
              >
                <IconComponent className={`${emphasisColor} text-2xl mr-2`} />
                {item.name}
              </li>
            );
          })}
        </ul>
        <ul className="space-y-3">
          {colTwo.map((item) => {
            const IconComponent = item.icon;
            return (
              <li
                key={item.name}
                className="text-sm flex items-center"
              >
                <IconComponent className={`${emphasisColor} text-2xl mr-2`} />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SkillList;
