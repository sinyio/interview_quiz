import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import styles from "./Header.module.css";
import { useScreenSize } from "@/shared/hooks/useSceenSize";

export const HeaderSkeleton = () => {
  const { isDesktop, isLaptop } = useScreenSize();

  return (
    <Flex justify="between" align="center" className={styles.header}>
      <Flex gap="48" align="center">
        <Skeleton width={140} height={34} />
        {(isDesktop || isLaptop) && (
          <Flex gap="20">
            <Skeleton width={114} height={22} />
            <Skeleton width={77} height={22} />
          </Flex>
        )}
      </Flex>
      {(isDesktop || isLaptop) && (
        <Flex gap="24" align="center">
          <Skeleton width={50} height={20} />
          <Skeleton width={170} height={48} borderRadius={12} />
        </Flex>
      )}
    </Flex>
  );
};
