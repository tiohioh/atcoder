#include <stdio.h>

int main(void){
  int syoku,kirai;
  scanf("%d %d",&syoku,&kirai);
  int syokus[100];
  int max = 0;
  for(int i = 0;i < syoku;i++){
    int tmp;
    scanf("%d",&tmp);
    syokus[i] = tmp;
    max = tmp > max ? tmp : max; 
  }
  char jadge = 0;
  for(int i = 0;i < kirai;i++){
    int tmp;
    scanf("%d",&tmp);
    jadge = syokus[tmp - 1] == max ? 1 : jadge;
  }
  if(jadge)
    puts("Yes");
  else
    puts("No");
}
