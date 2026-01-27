import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { useTheme } from '@/hooks/use-theme';
import { BiRightArrow } from 'react-icons/bi';
import Paragraph from 'components/utils/Paragraph';
import { experience } from 'data/experience';
import Head from 'next/head';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperienceScreen = () => {
  const { resolvedTheme } = useTheme();
  const svgColor =
    resolvedTheme === 'light' ? 'text-teal-500' : 'text-cyan-200';

  return (
    <>
      <Head>
        <title>Pranay Yadav | Experience</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Pranay Yadav | Full stack developer "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranayyadav.vercel.app" />
        <meta
          property="og:title"
          content="Pranay Yadav | Full stack developer "
        />
      </Head>
      <main>
        <Container maxW="container.lg">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Heading
                as="h1"
                fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                mb={4}
                textTransform="uppercase"
              >
                Places i've worked
              </Heading>
              <Paragraph props={{ fontSize: 'xl', lineHeight: '1.6' }}>
                Here are Some places where I've worked!
              </Paragraph>
            </div>
          </motion.div>
          <div>
            {experience.map((exp, i) => (
              <div key={i}>
                <Divider my={4} />
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[10rem_repeat(3,1fr)] grid-rows-1 md:grid-rows-3 gap-4">
                    <div className="col-start-1 row-start-1 flex items-center justify-center mb-2 md:mb-0">
                      <Image
                        width={100}
                        height={100}
                        src={exp.logo}
                        alt={exp.title}
                        className="object-cover"
                      />
                    </div>

                    <div className="col-start-1 md:col-start-2 md:col-end-5 mt-0 md:mt-2">
                      <Heading as="h2" className="text-xl font-semibold">
                        {exp.title}
                      </Heading>
                      <Heading as="h2" className="text-2xl font-bold">
                        #{exp.company}
                      </Heading>
                      <p className="font-poppins font-medium">{exp.duration}</p>
                    </div>
                    <div className="col-start-1 col-end-1 md:col-end-5 row-start-3 md:row-start-2 row-end-5">
                      <ul className="pt-4 list-none">
                        {exp.description.map((desc) => {
                          return (
                            <li
                              key={exp.id + desc + ''}
                              className="font-poppins text-base mb-1 flex items-center justify-start"
                            >
                              <BiRightArrow
                                className={`${svgColor} text-xl mr-2 flex-shrink-0`}
                              />
                              <span className="block">{desc}</span>
                            </li>
                          );
                        })}
                        {exp.certLink && (
                          <li className="font-poppins text-base mb-1 flex items-center justify-start">
                            <BiRightArrow
                              className={`${svgColor} text-xl mr-2 flex-shrink-0`}
                            />
                            <a
                              href={exp.certLink}
                              className="block text-primary font-medium hover:underline"
                            >
                              Click here to view Certificate
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default ExperienceScreen;
