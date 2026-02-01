import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    password: string | null;
    firstname: string | null;
    lastname: string | null;
    rank: string | null;
    stationId: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    profilepic: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    password: string | null;
    firstname: string | null;
    lastname: string | null;
    rank: string | null;
    stationId: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    profilepic: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    username: number;
    password: number;
    firstname: number;
    lastname: number;
    rank: number;
    stationId: number;
    role: number;
    createdAt: number;
    profilepic: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    password?: true;
    firstname?: true;
    lastname?: true;
    rank?: true;
    stationId?: true;
    role?: true;
    createdAt?: true;
    profilepic?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    password?: true;
    firstname?: true;
    lastname?: true;
    rank?: true;
    stationId?: true;
    role?: true;
    createdAt?: true;
    profilepic?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    password?: true;
    firstname?: true;
    lastname?: true;
    rank?: true;
    stationId?: true;
    role?: true;
    createdAt?: true;
    profilepic?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role: $Enums.Role;
    createdAt: Date;
    profilepic: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstname?: Prisma.StringFilter<"User"> | string;
    lastname?: Prisma.StringFilter<"User"> | string;
    rank?: Prisma.StringFilter<"User"> | string;
    stationId?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profilepic?: Prisma.StringNullableFilter<"User"> | string | null;
    cases?: Prisma.CaseRecordListRelationFilter;
    scanLogs?: Prisma.ScanLogListRelationFilter;
    sentMessages?: Prisma.MessageListRelationFilter;
    conversations1?: Prisma.ConversationListRelationFilter;
    conversations2?: Prisma.ConversationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profilepic?: Prisma.SortOrderInput | Prisma.SortOrder;
    cases?: Prisma.CaseRecordOrderByRelationAggregateInput;
    scanLogs?: Prisma.ScanLogOrderByRelationAggregateInput;
    sentMessages?: Prisma.MessageOrderByRelationAggregateInput;
    conversations1?: Prisma.ConversationOrderByRelationAggregateInput;
    conversations2?: Prisma.ConversationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    username?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    firstname?: Prisma.StringFilter<"User"> | string;
    lastname?: Prisma.StringFilter<"User"> | string;
    rank?: Prisma.StringFilter<"User"> | string;
    stationId?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profilepic?: Prisma.StringNullableFilter<"User"> | string | null;
    cases?: Prisma.CaseRecordListRelationFilter;
    scanLogs?: Prisma.ScanLogListRelationFilter;
    sentMessages?: Prisma.MessageListRelationFilter;
    conversations1?: Prisma.ConversationListRelationFilter;
    conversations2?: Prisma.ConversationListRelationFilter;
}, "id" | "email" | "username">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profilepic?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstname?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastname?: Prisma.StringWithAggregatesFilter<"User"> | string;
    rank?: Prisma.StringWithAggregatesFilter<"User"> | string;
    stationId?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    profilepic?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationCreateNestedManyWithoutParticipantTwoInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordUncheckedCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantTwoInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUncheckedUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profilepic?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profilepic?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profilepic?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type UserCreateNestedOneWithoutCasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCasesInput, Prisma.UserUncheckedCreateWithoutCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCasesInput, Prisma.UserUncheckedCreateWithoutCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCasesInput;
    upsert?: Prisma.UserUpsertWithoutCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCasesInput, Prisma.UserUpdateWithoutCasesInput>, Prisma.UserUncheckedUpdateWithoutCasesInput>;
};
export type UserCreateNestedOneWithoutScanLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutScanLogsInput, Prisma.UserUncheckedCreateWithoutScanLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutScanLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutScanLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutScanLogsInput, Prisma.UserUncheckedCreateWithoutScanLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutScanLogsInput;
    upsert?: Prisma.UserUpsertWithoutScanLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutScanLogsInput, Prisma.UserUpdateWithoutScanLogsInput>, Prisma.UserUncheckedUpdateWithoutScanLogsInput>;
};
export type UserCreateNestedOneWithoutConversations1Input = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversations1Input, Prisma.UserUncheckedCreateWithoutConversations1Input>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversations1Input;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutConversations2Input = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversations2Input, Prisma.UserUncheckedCreateWithoutConversations2Input>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversations2Input;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutConversations1NestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversations1Input, Prisma.UserUncheckedCreateWithoutConversations1Input>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversations1Input;
    upsert?: Prisma.UserUpsertWithoutConversations1Input;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConversations1Input, Prisma.UserUpdateWithoutConversations1Input>, Prisma.UserUncheckedUpdateWithoutConversations1Input>;
};
export type UserUpdateOneRequiredWithoutConversations2NestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversations2Input, Prisma.UserUncheckedCreateWithoutConversations2Input>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversations2Input;
    upsert?: Prisma.UserUpsertWithoutConversations2Input;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConversations2Input, Prisma.UserUpdateWithoutConversations2Input>, Prisma.UserUncheckedUpdateWithoutConversations2Input>;
};
export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentMessagesInput, Prisma.UserUncheckedCreateWithoutSentMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentMessagesInput, Prisma.UserUncheckedCreateWithoutSentMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentMessagesInput;
    upsert?: Prisma.UserUpsertWithoutSentMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSentMessagesInput, Prisma.UserUpdateWithoutSentMessagesInput>, Prisma.UserUncheckedUpdateWithoutSentMessagesInput>;
};
export type UserCreateWithoutCasesInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationCreateNestedManyWithoutParticipantTwoInput;
};
export type UserUncheckedCreateWithoutCasesInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantTwoInput;
};
export type UserCreateOrConnectWithoutCasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCasesInput, Prisma.UserUncheckedCreateWithoutCasesInput>;
};
export type UserUpsertWithoutCasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCasesInput, Prisma.UserUncheckedUpdateWithoutCasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCasesInput, Prisma.UserUncheckedCreateWithoutCasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCasesInput, Prisma.UserUncheckedUpdateWithoutCasesInput>;
};
export type UserUpdateWithoutCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserUncheckedUpdateWithoutCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserCreateWithoutScanLogsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationCreateNestedManyWithoutParticipantTwoInput;
};
export type UserUncheckedCreateWithoutScanLogsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordUncheckedCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantTwoInput;
};
export type UserCreateOrConnectWithoutScanLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutScanLogsInput, Prisma.UserUncheckedCreateWithoutScanLogsInput>;
};
export type UserUpsertWithoutScanLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutScanLogsInput, Prisma.UserUncheckedUpdateWithoutScanLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutScanLogsInput, Prisma.UserUncheckedCreateWithoutScanLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutScanLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutScanLogsInput, Prisma.UserUncheckedUpdateWithoutScanLogsInput>;
};
export type UserUpdateWithoutScanLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserUncheckedUpdateWithoutScanLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUncheckedUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserCreateWithoutConversations1Input = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    conversations2?: Prisma.ConversationCreateNestedManyWithoutParticipantTwoInput;
};
export type UserUncheckedCreateWithoutConversations1Input = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordUncheckedCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    conversations2?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantTwoInput;
};
export type UserCreateOrConnectWithoutConversations1Input = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversations1Input, Prisma.UserUncheckedCreateWithoutConversations1Input>;
};
export type UserCreateWithoutConversations2Input = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationCreateNestedManyWithoutParticipantOneInput;
};
export type UserUncheckedCreateWithoutConversations2Input = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordUncheckedCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutUserInput;
    sentMessages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    conversations1?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantOneInput;
};
export type UserCreateOrConnectWithoutConversations2Input = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversations2Input, Prisma.UserUncheckedCreateWithoutConversations2Input>;
};
export type UserUpsertWithoutConversations1Input = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConversations1Input, Prisma.UserUncheckedUpdateWithoutConversations1Input>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversations1Input, Prisma.UserUncheckedCreateWithoutConversations1Input>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConversations1Input = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConversations1Input, Prisma.UserUncheckedUpdateWithoutConversations1Input>;
};
export type UserUpdateWithoutConversations1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    conversations2?: Prisma.ConversationUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserUncheckedUpdateWithoutConversations1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUncheckedUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    conversations2?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserUpsertWithoutConversations2Input = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConversations2Input, Prisma.UserUncheckedUpdateWithoutConversations2Input>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversations2Input, Prisma.UserUncheckedCreateWithoutConversations2Input>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConversations2Input = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConversations2Input, Prisma.UserUncheckedUpdateWithoutConversations2Input>;
};
export type UserUpdateWithoutConversations2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUpdateManyWithoutParticipantOneNestedInput;
};
export type UserUncheckedUpdateWithoutConversations2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUncheckedUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutUserNestedInput;
    sentMessages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    conversations1?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantOneNestedInput;
};
export type UserCreateWithoutSentMessagesInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutUserInput;
    conversations1?: Prisma.ConversationCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationCreateNestedManyWithoutParticipantTwoInput;
};
export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    profilepic?: string | null;
    cases?: Prisma.CaseRecordUncheckedCreateNestedManyWithoutUserInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutUserInput;
    conversations1?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantOneInput;
    conversations2?: Prisma.ConversationUncheckedCreateNestedManyWithoutParticipantTwoInput;
};
export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentMessagesInput, Prisma.UserUncheckedCreateWithoutSentMessagesInput>;
};
export type UserUpsertWithoutSentMessagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSentMessagesInput, Prisma.UserUncheckedUpdateWithoutSentMessagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentMessagesInput, Prisma.UserUncheckedCreateWithoutSentMessagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSentMessagesInput, Prisma.UserUncheckedUpdateWithoutSentMessagesInput>;
};
export type UserUpdateWithoutSentMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutUserNestedInput;
    conversations1?: Prisma.ConversationUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUpdateManyWithoutParticipantTwoNestedInput;
};
export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profilepic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cases?: Prisma.CaseRecordUncheckedUpdateManyWithoutUserNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutUserNestedInput;
    conversations1?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantOneNestedInput;
    conversations2?: Prisma.ConversationUncheckedUpdateManyWithoutParticipantTwoNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    cases: number;
    scanLogs: number;
    sentMessages: number;
    conversations1: number;
    conversations2: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cases?: boolean | UserCountOutputTypeCountCasesArgs;
    scanLogs?: boolean | UserCountOutputTypeCountScanLogsArgs;
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs;
    conversations1?: boolean | UserCountOutputTypeCountConversations1Args;
    conversations2?: boolean | UserCountOutputTypeCountConversations2Args;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseRecordWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountScanLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScanLogWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountConversations1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountConversations2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    password?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    rank?: boolean;
    stationId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    profilepic?: boolean;
    cases?: boolean | Prisma.User$casesArgs<ExtArgs>;
    scanLogs?: boolean | Prisma.User$scanLogsArgs<ExtArgs>;
    sentMessages?: boolean | Prisma.User$sentMessagesArgs<ExtArgs>;
    conversations1?: boolean | Prisma.User$conversations1Args<ExtArgs>;
    conversations2?: boolean | Prisma.User$conversations2Args<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    password?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    rank?: boolean;
    stationId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    profilepic?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    password?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    rank?: boolean;
    stationId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    profilepic?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    username?: boolean;
    password?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    rank?: boolean;
    stationId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    profilepic?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "username" | "password" | "firstname" | "lastname" | "rank" | "stationId" | "role" | "createdAt" | "profilepic", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cases?: boolean | Prisma.User$casesArgs<ExtArgs>;
    scanLogs?: boolean | Prisma.User$scanLogsArgs<ExtArgs>;
    sentMessages?: boolean | Prisma.User$sentMessagesArgs<ExtArgs>;
    conversations1?: boolean | Prisma.User$conversations1Args<ExtArgs>;
    conversations2?: boolean | Prisma.User$conversations2Args<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        cases: Prisma.$CaseRecordPayload<ExtArgs>[];
        scanLogs: Prisma.$ScanLogPayload<ExtArgs>[];
        sentMessages: Prisma.$MessagePayload<ExtArgs>[];
        conversations1: Prisma.$ConversationPayload<ExtArgs>[];
        conversations2: Prisma.$ConversationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        username: string;
        password: string;
        firstname: string;
        lastname: string;
        rank: string;
        stationId: string;
        role: $Enums.Role;
        createdAt: Date;
        profilepic: string | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cases<T extends Prisma.User$casesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$casesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    scanLogs<T extends Prisma.User$scanLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$scanLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScanLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sentMessages<T extends Prisma.User$sentMessagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations1<T extends Prisma.User$conversations1Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$conversations1Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations2<T extends Prisma.User$conversations2Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$conversations2Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly firstname: Prisma.FieldRef<"User", 'String'>;
    readonly lastname: Prisma.FieldRef<"User", 'String'>;
    readonly rank: Prisma.FieldRef<"User", 'String'>;
    readonly stationId: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly profilepic: Prisma.FieldRef<"User", 'String'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.cases
 */
export type User$casesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    where?: Prisma.CaseRecordWhereInput;
    orderBy?: Prisma.CaseRecordOrderByWithRelationInput | Prisma.CaseRecordOrderByWithRelationInput[];
    cursor?: Prisma.CaseRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseRecordScalarFieldEnum | Prisma.CaseRecordScalarFieldEnum[];
};
/**
 * User.scanLogs
 */
export type User$scanLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanLog
     */
    select?: Prisma.ScanLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScanLog
     */
    omit?: Prisma.ScanLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScanLogInclude<ExtArgs> | null;
    where?: Prisma.ScanLogWhereInput;
    orderBy?: Prisma.ScanLogOrderByWithRelationInput | Prisma.ScanLogOrderByWithRelationInput[];
    cursor?: Prisma.ScanLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScanLogScalarFieldEnum | Prisma.ScanLogScalarFieldEnum[];
};
/**
 * User.sentMessages
 */
export type User$sentMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: Prisma.MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
/**
 * User.conversations1
 */
export type User$conversations1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversation
     */
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
/**
 * User.conversations2
 */
export type User$conversations2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversation
     */
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map