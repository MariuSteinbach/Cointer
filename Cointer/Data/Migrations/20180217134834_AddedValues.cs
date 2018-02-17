using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Cointer.Data.Migrations
{
    public partial class AddedValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Value",
                table: "Coin");

            migrationBuilder.AddColumn<string>(
                name: "ValueID",
                table: "Coin",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Value",
                columns: table => new
                {
                    ValueID = table.Column<string>(nullable: false),
                    Cents = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Value", x => x.ValueID);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coin_Value_ValueID",
                table: "Coin");

            migrationBuilder.DropTable(
                name: "Value");

            migrationBuilder.DropIndex(
                name: "IX_Coin_ValueID",
                table: "Coin");

            migrationBuilder.DropColumn(
                name: "ValueID",
                table: "Coin");

            migrationBuilder.AddColumn<int>(
                name: "Value",
                table: "Coin",
                nullable: false,
                defaultValue: 0);
        }
    }
}
