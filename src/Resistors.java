class Resistors {

    public static void main(String[] args) {
        System.out.println(colorCode("white"));
    }

    static int colorCode(String color) {
        for (int i = 0; i < colors().length ; i++) {
            if (colors()[i] == color) {
                return i;
            }
        }
        return 0;
    }

    public static String[] colors() {
        String[] x = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
        return x;
    }
}
