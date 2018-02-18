using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Cointer.Data.Migrations
{
    public partial class AddedValueCount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coin_Value_ValueID",
                table: "Coin");

            migrationBuilder.DropIndex(
                name: "IX_Coin_ValueID",
                table: "Coin");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "Value",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "ValueID",
                table: "Coin",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "Value");

            migrationBuilder.AlterColumn<string>(
                name: "ValueID",
                table: "Coin",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Coin_ValueID",
                table: "Coin",
                column: "ValueID");

            migrationBuilder.AddForeignKey(
                name: "FK_Coin_Value_ValueID",
                table: "Coin",
                column: "ValueID",
                principalTable: "Value",
                principalColumn: "ValueID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
