import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { SealCheck } from "@/shared/ui/Icons/SealCheck";
import { Text } from "@/shared/ui/Text";
import { ArrowRight } from "@/shared/ui/Icons/ArrowRight";
import { Links } from "./Links/Links";
import { HTMLAttributes } from "react";
import styles from "./JoinYeaHub.module.css";

export const JoinYeaHub = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card {...props}>
      <Flex gap="16" direction="column">
        <Flex gap="12" direction="column">
          <Flex gap="10" align="center">
            <SealCheck />
            <Text variant="body5-strong">Развивайтесь с нами!</Text>
          </Flex>
          <Text variant="body2-accent" color="black-600">
            Станьте членом сообщества YeaHub и получите полный доступ ко всем
            возможностям платформы!
          </Text>
          <Links />
          <Button variant="link-purple" className={styles.button}>
            <Flex gap="12" align="center">
              <Text variant="body3-strong" color="purple-700">
                Стать членом сообщества
              </Text>
              <ArrowRight className={styles.arrow} />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
