interface Exhibition {
  titleEN: string;
  titleTR: string;
  date: string;
  contentEN: string;
  contentTR: string;
}

export const exhibitions: Exhibition[] = [
  {
    titleEN: "Breakwater",
    titleTR: "Dalgakıran",
    date: "19.11 - 12.12 | 2021",
    contentEN: `<p>
      <img
        src="../src/images/dalgakiran.jpg"
        class="w-full h-auto"
      />
      <hr class="border-dashed border-2 m-1 w-4 mx-auto my-2" />
      Eski Pazar is excited to present its first exhibition "Breakwater"... <br /><br />

      Eski Pazar envisages to become a playground, open to collective use, bringing people together. It embarked upon its quest by paying a visit to the local artists. With an inductive approach, The Wavebreaker emerged through the common theme of fluidity/fixity, which strikingly appeared in all of the artists' work. <br />  <br />

      Eski Pazar was founded upon the questions of how the memory of a city is formed, how the city and the individual transform each other, and what the impacts of fixed and changing elements on the urban memory might be. We want these commonalities captured in the artists' works to allow us to reflect upon these questions together. <br />`,
    contentTR: `<p>
      <img
      src="../src/images/dalgakiran.jpg"
      class="w-full h-auto"
      />
      <hr class="border-dashed border-2 m-1 w-4 mx-auto my-2"  />
      Eski Pazar ilk sergisi “Dalgakıran”ı heyecanla sunar... <br /><br />

      Kolektif kullanıma açık, insanları bir araya getirmek üzere bir serbest oyun alanı olma hayali kuran Eski Pazar, kentin sanatçılarını ziyaret etmekle işe başladı. Dalgakıran, tümevarımsal bir biçimde, sanatçıların işlerinde dikkat çeken akışkanlık/sabitlik ortak teması dolayımıyla kendini buldu.  <br />  <br />

      Bir kentin hafızası nasıl oluşur, kent ve birey birbirini nasıl bir dönüşüme dahil eder ve dönüşen/sabit kalan şeylerin kent hafızasına etkisi nedir gibi sorular Eski Pazar'ın kurulmasını tetikleyen sorulardı. Sanatçıların işlerinde yakalanan ortaklığın da bu sorular etrafında birlikte düşünmemize olanak tanımasını arzu ediyoruz. <br />`,
  },
];
