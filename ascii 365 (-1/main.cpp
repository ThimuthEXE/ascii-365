#include <iostream>
using namespace std;

int main() {
    string paragraph;
    int ascii,code;
    char char1;

    cout << "Enter the AK code : ";
    cin >> code;

    cout << "Enter the Day Code:\n";
    cin.ignore();
    getline(cin, paragraph);

    size_t i = 0;
    while (i < paragraph.length()) {
        char currentChar = paragraph[i];
        ascii = static_cast<int>(currentChar);
        ascii += code;
        char1 = static_cast<char>(ascii);
        cout << char1;
        i++;
    }

    return 0;
}
