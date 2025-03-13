type BodyProps = {
  language: string;
};

function About({ language }: BodyProps) {
  return (
    <div>
      {language === "tr-TR" ? (
        <p>
          Eskipazar, 2021 yılında Muğla'nın Dalyan kasabasında kurulan kar amacı
          gütmeyen bir bağımsız sergi ve araştırma mekanıdır. Kendisini "serbest
          oyun alanı" olarak adlandıran Eskipazar, sanatın özgürlüğünü ve
          yaratıcılığını korumak için yola çıktı. Bu özgün sanat mekanının
          amacı, güneydeki sanatçılar ve sanatçı kolektifleri ağına ulaşarak
          sanatı daha geniş bir kitleye sunmak, yerel dokunuşlarla
          zenginleştirilerek yeni bir sanat pratiği oluşturmak, kentin güncel
          sanat pratiklerini arşivlemektir.
          <br />
          <br />
          Eskipazar, geleneksel sergi mekanlarının sınırlarını aşarak
          sanatçıların düşünce ve ifade özgürlüğünü destekler. Her anlamda
          bağımsız olan bu mekan, sanatın özgün ve deneysel yönlerini kullanır.
          Eskipazar, sadece sergi mekanı değil, aynı zamanda sanatsal
          araştırmaların ve düşüncelerin serbestçe paylaşıldığı bir platform
          olarak hizmet verir.
          <br />
          <br />
          Eskipazar'ın öncelikli hedefi, güney bölgesindeki sanatçılar ve
          sanatçı kolektifleri ile işbirliği yaparak yerel sanatı daha görünür
          hale getirmek, bu sanatı yerel dokunuşlarla zenginleştirerek yeni bir
          sanat pratiği oluşturmak ve kentin güncel sanat pratiklerini
          arşivlemektir. Bu bağlamda, Eskipazar, sanatın sınırlarını zorlamayı,
          yeni sanat pratiklerini teşvik etmeyi ve sanatın evrensel dilini
          anlatmayı amaçlar. Eskipazar, sanatın gücünü toplumla buluşturarak,
          yaratıcılığın, özgürlüğün ve arşivciliğin önemini vurgular.
          Eskipazar'ın kapıları, sanatın serbestçe oynandığı ve dönüştüğü bir
          mekan olarak herkese açıktır.
        </p>
      ) : (
        <p>
          Eskipazar is a non-profit independent exhibition and research space
          founded in 2021 in Dalyan, Muğla. Calling itself a "free playground",
          Eskipazar set out to protect the freedom and creativity of art. The
          aim of this unique art space is to present art to a wider audience by
          reaching out to the network of artists and artist collectives in the
          south, to create a new art practice enriched with local touches, and
          to archive the contemporary art practices of the city.
          <br />
          <br />
          Eskipazar supports artists' freedom of thought and expression by
          transcending the boundaries of traditional exhibition venues.
          Independent in every sense, this space celebrates the original and
          experimental aspects of art. Eskipazar serves as an exhibition space
          and a platform where artistic research and ideas are freely shared.
          <br />
          <br />
          Eskipazar's primary goal is to make local art more visible by
          collaborating with artists and artist collectives in the southern
          region, to create a new art practice by enriching this art with local
          touches, and to archive the contemporary art practices of the city. In
          this context, Eskipazar aims to push the boundaries of art, to
          encourage new art practices, and to explain the universal language of
          art. Eskipazar emphasizes the importance of creativity, freedom, and
          archiving by bringing the power of art together with society. The
          doors of Eskipazar are open to everyone as a place where art is played
          and transformed freely.
        </p>
      )}
    </div>
  );
}

export default About;
