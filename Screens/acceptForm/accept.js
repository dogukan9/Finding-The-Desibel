import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import { CheckBox } from "react-native-elements";
import CToolbar from "../../Components/CToolBar";
const wHeight = Dimensions.get("window").width;
const H_MAX_HEIGHT = wHeight * 0.36;
const H_MIN_HEIGHT = wHeight * 0.24;
const AcceptFormScreen = (props) => {
  const [okay, setOkay] = React.useState(true);
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  return (
    <View style={{ alignItems: "center", height: "100%" }}>
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolbar
          title="Hasta Kayıt Ekranı"
          onBackPress={props.navigation.goBack}
        />
      </Animated.View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 24,
            paddingVertical: 2,
          }}
        >
          Gönüllü Onam Formu
        </Text>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              paddingVertical: 3,
              margin: 3,
              padding: 10,
            }}
          >
            Sayın Gönüllü
          </Text>
        </View>
        <View>
          <Text style={{ marginHorizontal: 5, paddingHorizontal: 5 }}>
            Bu katıldığınız çalışma bilimsel bir araştırma olup, araştırmanın
            adı "Gerçek Gürültülerde Cümle Testi Mobil Uygulamasının
            Geliştirilmesi ve Etkinliğinin Değerlendirilmesi'' dir. Çalışma
            hakkında tam olarak bilgi sahibi olduktan sonra eğer katılmak
            isterseniz sizden bu formu onaylamanız istenecektir. Bu çalışmada
            yer alıp almamak tamamen size bağlıdır. Şu an bu formu doldursanız
            bile istediğiniz herhangi bir zamanda bir neden göstermeksizin
            çalışmayı bırakmakta özgürsünüz. Aynı şekilde çalışmayı yürüten
            araştırmacı da araştırma şartları gereği sizi çalışma dışı
            bırakabilir. Çalışma sonucunda kimliğinizi ortaya çıkaracak kayıtlar
            gizli tutulacak olup kamuoyuna açıklanmayacaktır; araştırma
            sonuçlarının yayımlanması halinde dahi kimliğiniz gizli kalacaktır.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              paddingVertical: 3,
              margin: 3,
              padding: 10,
            }}
          >
            Çalışmanın amacı:
          </Text>
        </View>
        <View>
          <Text style={{ marginHorizontal: 5, paddingHorizontal: 5 }}>
            Bu çalışma çocuklarda ve genç yetişkin bireylerde uygulanabilir.
            Çalışmada; 40, 60 ve 80 dB ses seviyesinde 3 adet gerçek çevre
            gürültüsü kullanılarak Sinyal Gürültü Oranı (SNR) eşiği tespit etmek
            amaçlanmaktadır. Ayrıca çalışmada kullanılan gürültülerin spektral
            analizi alınacaktır. Bu uygulanacak testin amacı çalışmanın Sinyal
            Gürültü Oranı için eşik tespit etme aşamasıdır. Duyduğunuz her
            cümlenin 3 veya 4 kelimesini sırasıyla seçmeniz gerekecektir. Test
            için öngörülen süre 10-15 dakika olup, araştırmada yer alması
            planlanan katılımcı sayısı 40 kişidir. Çalışmaya 8-12 yaş arası 20
            çocuk ve 18-22 yaş arası 20 genç yetişkin dahil edilecektir. Bu
            araştırmada yer almanız nedeniyle size hiçbir ödeme yapılmayacaktır;
            ayrıca, bu araştırma kapsamındaki bütün muayene, tetkik, testler ve
            tıbbi bakım hizmetleri için sizden veya bağlı bulunduğunuz sosyal
            güvenlik kuruluşundan hiçbir ücret istenmeyecektir. Yapılan bu
            çalışmada, sizin isminiz hiçbir şekilde kullanılmayacaktır.
            Çalışmaya katılmakla parasal yük altına girmeyeceksiniz ve size de
            herhangi bir ödeme yapılmayacaktır.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              paddingVertical: 3,
              margin: 3,
              padding: 10,
            }}
          >
            Risk :
          </Text>
        </View>
        <View>
          <Text style={{ marginHorizontal: 5, paddingHorizontal: 5 }}>
            Çalışmamızda hiçbir risk yoktur. Çalışma ile ilgili bir sorunuz
            olduğunda ya da çalışma ile ilgili ek bilgiye gereksiniminiz
            olduğunda araştırmacı Ody. Eda Kurt (edakurt3@stu.aydin.edu.tr/0534
            425 13 75 ) ile iletişime geçebilirsiniz
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              paddingVertical: 3,
              margin: 3,
              padding: 10,
            }}
          >
            Saygılarımızla :
          </Text>
        </View>
        <View>
          <Text style={{ marginHorizontal: 5, paddingHorizontal: 5 }}>
            Araştırmacı: Ody. Eda Kurt (Araştırmaya yönelik oluşabilecek
            sorularla ilgili olarak iletişime geçilebilecek kişi) Yukarıda yer
            alan ve araştırmaya başlanmadan önce gönüllüye verilmesi gereken
            bilgileri okudum ve sözlü olarak dinledim. Aklıma gelen tüm soruları
            araştırıcıya sordum, yazılı ve sözlü olarak bana yapılan tüm
            açıklamaları ayrıntılarıyla anlamış bulunmaktayım. Çalışmaya
            katılmayı isteyip istemediğime karar vermem için bana yeterli zaman
            tanındı. Bu koşullar altında, bana ait tıbbi bilgilerin gözden
            geçirilmesi, transfer edilmesi ve işlenmesi konusunda araştırma
            yürütücüsüne yetki veriyor ve söz konusu araştırmaya ilişkin bana
            yapılan katılım davetini hiçbir zorlama ve baskı olmaksızın büyük
            bir gönüllülük içerisinde kabul ediyorum.
          </Text>
        </View>

        <CheckBox
          title="Sözleşmeyi Okudum Anladım"
          checked={!okay}
          onPress={() => setOkay(!okay)}
        />

        <Button
          title="Devam Et"
          color="#2196F3"
          disabled={okay}
          onPress={() => {
            props.navigation.navigate("instruction");
          }}
        />
      </ScrollView>
    </View>
  );
};

export default AcceptFormScreen;
