import Image from "next/image";
import styles from "./page.module.scss";
import { FaStar, FaQuestion } from 'react-icons/fa'
import { RiQuestionAnswerLine } from 'react-icons/ri'
// *****************************************************************************

export default function Home() {
  const text_01 = "Hey! I'm Dennis... I will be your tutor!"
  // ***************************************************************************
  return (
    <main className={styles.main}>
      <div className={styles.hero_div}>
        <div className={styles.header}>
          <Image src="/logo.svg" alt="English Fast-track Logo" width="300" height="35"/>
        </div>
        <div className={styles.body}>
          <div className={styles.column_01}></div>
          <div className={styles.column_02}>
            <div className={styles.div_01}>
              <p className={styles.p_01}>
                <span className={styles.span_01}>Speak English Confidently</span> in Business Settings: Master Interviews, 
                Meetings, and Presentations <span className={styles.span_01}>in 3 Months</span>
              </p>
            </div>
            <div className={styles.div_02}>
              <p className={styles.p_02}>
                Become a Pro in English Communication Skills with Our Fast-Track Course
              </p>
            </div>
            <div className={styles.div_03}>
              <input type="text" className={styles.input_01} placeholder="Name"/>
              <input type="text" className={styles.input_01} placeholder="Email"/>
            </div>
            <div className={styles.div_04}>
              <button className={styles.button_01}>
                Schedule my FREE 30 min lesson today!
              </button>
            </div>
            <div className={styles.div_05}>
              <p className={styles.p_03}>
                We never share your information
              </p>
            </div>
            <div className={styles.div_06}>
              <div className={styles.div_06_01}>
                <Image src="/thumb_up_off_alt.svg" alt="English Fast Traco Logo" width="33" height="33"/>
                <p className={styles.p_04}>
                  98% positive
                </p>
              </div>
              <div className={styles.div_06_01}>
                <p className={styles.p_05}>
                  600+ students helped  
                </p>
              </div>
              <div className={styles.div_06_01}>
                <Image src="/cambly_logo.svg" alt="Cambly logo" width="122" height="78"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************************************************************************************************** */}
      <div className={styles.sub_hero_01_div}>
        <div className={styles.body}>
          <div className={styles.column_01}>
            <div className={styles.picture_div}>
              <Image
                src="/speaking_at_lecture.png" 
                alt="Speaking at a lecture" 
                width="500" 
                height="500"
                className={styles.image_01}
              />
            </div>
            <div className={styles.text_div}>
              <p className={styles.p_01}>
                Speak with Perfect Pronunciation
              </p>
              <p className={styles.p_02}>
                Methods to communicate easily with native English speakers and be understood by everyone.
              </p>
            </div>
            <Image
              src="/message.svg" 
              alt="message icon" 
              width="70" 
              height="70"
            />
          </div>
          <div className={styles.column_01}>
            <div className={styles.picture_div}>
              <Image
                src="/talking_on_phone.png" 
                alt="Talking on the phone" 
                width="500" 
                height="500"
                className={styles.image_01}
              />
            </div>
            <div className={styles.text_div}>
              <p className={styles.p_01}>
                Listening and Understanding
              </p>
              <p className={styles.p_02}>
                Understand clearly what native speakers are saying... and get rid of subtitles in movies and series!
              </p>
            </div>
            <Image
              src="/phone.svg" 
              alt="phone icon" 
              width="70" 
              height="70"
            />
          </div>
          <div className={styles.column_01}>
            <div className={styles.picture_div}>
              <Image
                src="/speaking_in_meeting.png" 
                alt="Speaking in a meeting"
                width="500" 
                height="500"
                className={styles.image_01}
              />
            </div>
            <div className={styles.text_div}>
              <p className={styles.p_01}>
                American Pronunciation
              </p>
              <p className={styles.p_02}>
                Learn to express your ideas in English and learn the techniques of presenting in public, on Zoom, in meetings 
                and in interviews.
              </p>
            </div>
            <Image
              src="/mic.svg" 
              alt="mic icon" 
              width="80" 
              height="80"
            />
          </div>

        </div>
      </div>
      {/* ********************************************************************************************************** */}
      <div className={styles.sub_hero_02_div}>
        <div className={styles.body}>
          <div className={styles.column_01}>
            <div className={styles.bio_div}>
              <p className={styles.p_01}>
                {text_01}
              </p>
              <p className={styles.p_02}>
                Hi! Let’s level-up your english! We will work on your English speech, oratory and public speaking, so if you think you are shy or an introvert, I will teach techniques to help break the ice, or if you wish to improve on your speaking in general we can work on voice, articulation and presentation. Feel free to book an available timeslot and I can’t wait to meet you on the other side!
              </p>
              <p className={styles.p_02}>
                You can choose to have a friendly conversation, or to have an English class. An English class will focus around your needs, you will recieve a quick guideline on what we will do, and work on your skills. We can also work on your English speech and presentation. You can definetely count on constructive feedback which will help you improve faster.
              </p>
              <p className={styles.p_02}>
                Canadian native English speaker who lives in São Paulo Brazil. I am into Computer 
              </p>
            </div>
          </div>
          <div className={styles.column_02}>
            <div className={styles.profile_div}>
              <div className={styles.picture_div}>
                <Image
                  src="/profile_02.png" 
                  alt="profile picture" 
                  width="500" 
                  height="500"
                  className={styles.image_01}
                />
              </div>
              <div className={styles.text_div}>
                <p className={styles.p_03}>Find me on Cambly as Dennis the Menace</p>
              </div>
              <div className={styles.text_div}>
                <p className={styles.p_03}>
                  Link:
                </p>
                <a 
                  href="https://www.cambly.com/en/tutor/tutors/623c8767ecb475605678a97e"
                  className={styles.a_01}
                >
                  https://www.cambly.com/en/tutor/tutors/623c8767ecb475605678a97e
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************************************************************************************************** */}
      <div className={styles.sub_hero_03_div}>
        <div className={styles.body}>
          <div className={styles.row_01}>
            <div className={styles.column_01}>
              <p className={styles.p_01}>
                Dennis의 수업은 재미있고, 많은 것을 배울 수 있습니다. 항상 학생의 이야기를 귀기울여 들어주십니다. 젠틀하고 이해심이 많은 튜터입니다. 
                그와의 대화는 친근하고 편안하고 즐겁습니다. 또한 수업이 매우 체계적이고 유익합니다. 복잡한 부분도 이해하기 쉽게 설명해주십니다. 
                매우 실용적이고 배운 내용을 실생활에 적용시킬 수 있습니다. Dennis를 만나게 되...
              </p>
              <div className={styles.profile_div}>
                <Image
                  src="/profiles/canada.jpeg"
                  alt="canadian girl" 
                  width="80" 
                  height="80"
                  className={styles.image_01}
                />
                <div className={styles.name_div}>
                  <p className={styles.p_name}>Ann ᙏ̤̮, Canada</p>
                  <div className={styles.five_star_div}>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column_01}>
              <p className={styles.p_01}>
              Dennis is great teacher. i feel so lucky to meet with Dennis. After our lessons with Dennis, I started to speak English more relax 😊 Thanks
              </p>
              <div className={styles.profile_div}>
                <Image
                  src="/profiles/turkey_boy_01.jpeg"
                  alt="turkey boy" 
                  width="80" 
                  height="80"
                  className={styles.image_01}
                />
                <div className={styles.name_div}>
                  <p className={styles.p_name}>ismail, Turkey</p>
                  <div className={styles.five_star_div}>
                  <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column_01}>
              <p className={styles.p_01}>
                He is a good teacher! We were talking about many things, for example programming! He helped me with my verb conjugation.
              </p>
              <div className={styles.profile_div}>
                <Image
                  src="/profiles/brazil_02.jpeg"
                  alt="brazil girl" 
                  width="80" 
                  height="80"
                  className={styles.image_01}
                />
                <div className={styles.name_div}>
                  <p className={styles.p_name}>Bruna, Brazil</p>
                  <div className={styles.five_star_div}>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row_01}>
          <div className={styles.column_01}>
              <p className={styles.p_01}>
                Dennis is the teacher who is always inspiring the students. He has amount of methods what are super creative and useful to let you talk more and think more. I enjoyed every class with Dennis.
              </p>
              <div className={styles.profile_div}>
                <Image
                  src="/profiles/china.jpeg"
                  alt="china girl" 
                  width="80" 
                  height="80"
                  className={styles.image_01}
                />
                <div className={styles.name_div}>
                  <p className={styles.p_name}>Mary, China</p>
                  <div className={styles.five_star_div}>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column_01}>
              <p className={styles.p_01}>
                I think Dennis is the best tutor. he always provide something to discuss, and make me practice speaking.
              </p>
              <div className={styles.profile_div}>
                <Image
                  src="/profiles/korea_02.jpeg"
                  alt="korean girl" 
                  width="80" 
                  height="80"
                  className={styles.image_01}
                />
                <div className={styles.name_div}>
                  <p className={styles.p_name}>김태민, South Korea</p>
                  <div className={styles.five_star_div}>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column_01}>
              <p className={styles.p_01}>
                Dennis is a very good teacher. It is clear that he is preparing before the lesson. And he is experienced in teaching. I feel comfortable talking to him.
              </p>
              <div className={styles.profile_div}>
                <Image
                  src="/profiles/turkey_boy_02.jpeg"
                  alt="turkish boy" 
                  width="80" 
                  height="80"
                  className={styles.image_01}
                />
                <div className={styles.name_div}>
                  <p className={styles.p_name}>Mansur TAŞDELEN, Turkey</p>
                  <div className={styles.five_star_div}>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                    <FaStar style={{ fontSize: '1.75rem', color: '#FD982C', marginRight: '4px' }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************************************************************************************************** */}
      <div className={styles.sub_hero_04_div}>
        <div className={styles.body}>
          <div className={styles.column_01}>
            <p className={styles.title}>
              FAQ (Frequently Asked Questions)
            </p>
            <div className={styles.question_wrap}>
              <div className={styles.question_div}>
                <FaQuestion color={"000"}/>
                <p className={styles.question_p}>
                  What is the price?
                </p>
              </div>
              <div className={styles.answer_div}>
                <RiQuestionAnswerLine  color={"000"}/>
                <p className={styles.answer_p}>
                  Less than the monthly Cambly price in your country.
                </p>
              </div>
            </div>

            <div className={styles.question_wrap}>
              <div className={styles.question_div}>
                <FaQuestion color={"000"}/>
                <p className={styles.question_p}>
                  Can I cancel anytime?
                </p>
              </div>
              <div className={styles.answer_div}>
                <RiQuestionAnswerLine  color={"000"}/>
                <p className={styles.answer_p}>
                  Yes, there are no penalties
                </p>
              </div>
            </div>

            <div className={styles.question_wrap}>
              <div className={styles.question_div}>
                <FaQuestion color={"000"}/>
                <p className={styles.question_p}>
                  What if I’m not satisfied?
                </p>
              </div>
              <div className={styles.answer_div}>
                <RiQuestionAnswerLine  color={"000"}/>
                <p className={styles.answer_p}>
                  You can ask for cancellation and/or refund after 2 classes.
                </p>
              </div>
            </div>

            <div className={styles.question_wrap}>
              <div className={styles.question_div}>
                <FaQuestion color={"000"}/>
                <p className={styles.question_p}>
                  What are the times available?
                </p>
              </div>
              <div className={styles.answer_div}>
                <RiQuestionAnswerLine  color={"000"}/>
                <p className={styles.answer_p}>
                  We can arrange a time that works for both.
                </p>
              </div>
            </div>

            <div className={styles.question_wrap}>
              <div className={styles.question_div}>
                <FaQuestion color={"000"}/>
                <p className={styles.question_p}>
                What are some of the methods?
                </p>
              </div>
              <div className={styles.answer_div}>
                <RiQuestionAnswerLine  color={"000"}/>
                <p className={styles.answer_p}>
                  Videos for Speaking/ Listening, Grammar & Vocabulary exercises, Pronunciation exercises, Public speaking exercises, Interview/ Meeting simulations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ********************************************************************************************************** */}
      <div className={styles.sub_hero_05_div}>
        <div className={styles.body}>
          <div className={styles.column_01}>
            <Image src="/logo.svg" alt="English Fast-track Logo" width="250" height="35"/>
            <p className={styles.p_01}>
              Join the Fast-track group and become a master in English communication
            </p>
            <div className={styles.input_div}>
              <input type="text" className={styles.input_01} placeholder="Name"/>
              <input type="text" className={styles.input_01} placeholder="Email"/>
            </div>
            <button
              className={styles.button_01}
            >
            Schedule my FREE 30 min lesson today!
            </button>
            <p className={styles.p_02}>
              We never share your information
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.body}>
            <a href="" className={styles.link}>Privacy Policy</a>
            <p className={styles.divisor_p}>|</p>
            <a href="" className={styles.link}>Terms and Conditions</a>
            <p className={styles.divisor_p}>|</p>
            <p className={styles.copyright_p}>© 2024 Dennis Lee All Rights Reserved</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
